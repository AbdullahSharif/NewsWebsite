// api key : d3a2e8e79e8a40ef965b09d2b1c88ecf

// to get top headlines:
// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d3a2e8e79e8a40ef965b09d2b1c88ecf
// https://newsapi.org/v2/top-headlines?country={country}&category={category}&apiKey={apiKey}

const apiKey = "5e4e3daa46c746abb3fb808863693184"
const BASE_URL = "https://newsapi.org/v2/"

// only headlines will be dispayed on the homepage.
const getHeadlines = async (info, country) => {
    const url = new URL(BASE_URL + info)
    url.search = new URLSearchParams({country, apiKey})
    return fetch(url).then(res => res.json()).then(data => data)

}

const getNewsByCategory = async (category, country) => {
    const url = new URL(BASE_URL + "top-headlines")
    url.search = new URLSearchParams({country, category, apiKey})
    return fetch(url).then(res => res.json()).then(data => data)
}


const getFormatedNews = async (category, country) => {
    const data = await getNewsByCategory(category, country)
    const {articles} = data

    return articles

}

const getFormatedHeadlines = async (info, country) => {
    const data = await getHeadlines(info, country)
    const {articles} = data
    return articles
}

export {getFormatedHeadlines, getFormatedNews}