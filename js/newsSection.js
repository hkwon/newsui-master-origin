export default class newsSection {
    constructor(fetchUrl) {
      this.fetchUrl = fetchUrl;
      this.currentPage = -1;
    }

    init(fnNewsListTemplate, fnNewsCompanyList) {
      if (this.currentPage == -1)
        this.currentPage = 0;

      this.fnNewsListTemplate = fnNewsListTemplate;
      this.fnNewsCompanyList = fnNewsCompanyList;
      this.fetchData();
    }

    fetchData() {
      fetch(this.fetchUrl)
        .then(res => res.json())
        .then(result => {
          console.log(result);
          this.newsList = result;
          this.makeCompanyList(result);
          this.makeNewsContent(0);
        });
    }

    makeCompanyList(data) {
      var len = data.length;
      var i;
      var list = [];

      for (i=0; i<len; i++) {
        list.push(data[i].company)
      }
      this.companyList = list;
      document.querySelector("#newsNavigation").innerHTML = this.fnNewsCompanyList(list);
    }

    makeNewsContent(index, direction) {
      if (index == -1) {
        this.currentPage += direction;
        if (this.currentPage < 0)
          this.currentPage = 9;
        else if (this.currentPage > 9)
          this.currentPage = 0;
      } else {
        this.currentPage = index;
      }
      document.getElementById("here").innerHTML = this.fnNewsListTemplate(this.newsList[this.currentPage]);
    }
}
