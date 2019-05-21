import newsSection from './newsSection.js'
import {fnNewsListTemplate} from '../templates/news.js'
import {fnNewsCompanyList} from '../templates/news.js'

const url = "/data/newslist.json";
const news = new newsSection(url);

document.addEventListener("DOMContentLoaded", () => {
    news.init(fnNewsListTemplate, fnNewsCompanyList);
    console.log("DOMContentLoaded.")
});

document.querySelector(".left").addEventListener("click", () => {
    news.makeNewsContent(-1, -1);
});

document.querySelector(".right").addEventListener("click", () => {
    news.makeNewsContent(-1, 1);
});

document.querySelector("#newsNavigation").addEventListener("click", (event) => {
    var name = event.target.innerText;
    console.log(name + " clicked.");
    var i = news.companyList.indexOf(name);
    console.log("index is ", i)
    news.makeNewsContent(i, 0);
});
