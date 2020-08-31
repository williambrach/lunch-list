using System;
using System.Collections.Generic;
using System.Text;

namespace Obed_azure_app
{
  class Menu
  {
    public string soup { get; set; }
    public List<Food> foods { get; set; }

    public List<string> images { get; set; }

    public Menu(string soup, List<Food> foods, List<string> images) {
      this.soup = soup;
      this.foods = foods;
      this.images = images;
    }
  }
}
