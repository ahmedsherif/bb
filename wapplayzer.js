const Wappalyzer = require('wappalyzer');
const prefix = "https://";

var fs = require('fs');
var urls = fs.readFileSync('domains-5000.txt').toString().split("\n");


;(async function() {
  const wappalyzer = await new Wappalyzer()

  try {
    await wappalyzer.init()

    const results = await Promise.all(
      urls.map(async (url) => {
        if(url.trim()!="")
        return {

        results: await wappalyzer.open("https://"+url).analyze()
      }})
    )

    console.log(JSON.stringify(results, null, 2))
  } catch (error) {
    console.error(error)
  }

  await wappalyzer.destroy()
})()
