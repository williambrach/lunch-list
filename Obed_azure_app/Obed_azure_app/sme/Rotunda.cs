using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;
using HtmlAgilityPack;
using System.Net.Http;
using System.Threading.Tasks;
using System.Linq;
using System.Text.RegularExpressions;

namespace Obed_azure_app.sme
{
  class Rotunda
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
        string innerText = rawText.Replace("\t", "");
        RegexOptions options = RegexOptions.None;
        Regex regex = new Regex("[ ]{2,}", options);
        innerText = regex.Replace(innerText, " ");

        if (count == 0)
        {
          soup = innerText;
        }
        else
        {
          string[] words = innerText.Split(' ');
          List<string> food = new List<string>();

          int countArr = 0;
          foreach (string word in words)
          {
            food.Add(word);
            if (word.Contains(".-€"))
            {
              Regex regex1 = new Regex(@".-€");
              string newPrice = regex1.Replace(word, "");
              price = newPrice;
              food.RemoveAt(countArr);
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
