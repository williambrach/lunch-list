using HtmlAgilityPack;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Obed_azure_app.sme
{
  class Mlyn
  {
    public static async Task<string> startCrawlerasync(string url)
    {
      var httpClient = new HttpClient();
      var html = await httpClient.GetStringAsync(url);
      var htmlDocument = new HtmlDocument();
      htmlDocument.LoadHtml(html);
      var divs = htmlDocument.DocumentNode.Descendants("div").Where(node => node.GetAttributeValue("class", "").Equals("daily-menu-row")).ToList();

      int count = 0;
      string soup = null;
      string price = null;
      var foods = new List<Food>();
      var images = new List<string>();

      foreach (var div in divs)
      {
        string rawText = div.InnerText.Trim();
        string innerText = rawText.Replace("\t", " ");

        if (count == 1)
        {
          soup = innerText;
        }
        else if (count == divs.Count)
        {
        }
        else if (count != 0)
        {


          string[] words = innerText.Split(' ');
          List<string> food = new List<string>();

          int countArr = 0;
          foreach (var word in words)
          {
            food.Add(word);
            if (word.Contains("€"))
            {
              price = words[countArr - 1];
              food.RemoveAt(countArr);
              food.RemoveAt(countArr - 1);
            }
            countArr++;
          }

          foods.Add(new Food(String.Join(" ", food), price));
        }
        count++;
      }

      Menu menu = new Menu(soup, foods, null);
      string json = JsonConvert.SerializeObject(menu);
      return json;
    }
  }
}
