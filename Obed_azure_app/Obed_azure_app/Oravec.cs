using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using HtmlAgilityPack;
using Newtonsoft.Json;
using System.Text.RegularExpressions;


namespace Obed_azure_app
{
  class Oravec
  {
    public static async Task<string> startCrawlerasync(string url)
    {
      var httpClient = new HttpClient();
      var html = await httpClient.GetStringAsync(url);
      var htmlDocument = new HtmlDocument();
      htmlDocument.LoadHtml(html);
      var jedla = htmlDocument.DocumentNode.Descendants("div").Where(node => node.GetAttributeValue("class", "").Equals("col-xs-10 col-sm-10")).ToList();
      var prices = htmlDocument.DocumentNode.Descendants("div").Where(node => node.GetAttributeValue("class", "").Equals("col-xs-2 col-sm-2 price")).ToList();

      int count = 0;
      string soup = null;
      var foods = new List<Food>();
      string innerText = null;


      foreach (var div in jedla)
      {
        if (count == 9) {
          break;
        }
        else if (count == 0)
        {
          soup = div.InnerText.Trim().Replace("\t", " ");
        }
        else
        {
          innerText = div.InnerText.Trim().Replace("\t", " ");
          Regex regex1 = new Regex(@"&nbsp;");
          string price = regex1.Replace(prices[count].InnerText.Trim(), "");
          foods.Add(new Food(innerText, price));
        }
        count++;
      }

      List<string> imgs = new List<string>();
      var images = htmlDocument.DocumentNode.Descendants("img").Where(node => node.GetAttributeValue("class", "").Equals("img-responsive")).ToList();
      count =  0;
      foreach (var image in images)
      {
        if (count == 3) {
          break;
        }
        if (imgs.Contains("https://www.menucka.sk" + image.Attributes["src"].Value)) {
          continue;
        }
        imgs.Add("https://www.menucka.sk" + image.Attributes["src"].Value);
        count++;
      }
        Menu menu = new Menu(soup, foods, imgs);
      string json = JsonConvert.SerializeObject(menu);
      return json;
    }
  }
}
