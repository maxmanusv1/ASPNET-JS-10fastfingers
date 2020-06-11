using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Net;
using System.Diagnostics;
using System.Collections;
using System.Text.RegularExpressions;
using System.Web.Script.Services;
using System.Web.Services;

namespace _10fastfingers
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
          
            /* 
            int sayac = 0;
            ArrayList list = new ArrayList();
            ArrayList harflerimiz = new ArrayList();
          
            for (int i = 'a'; i < 'z'; i++)
            {
                harflerimiz.Add(i);
            }
           foreach (var item in split)
            {
                Debug.WriteLine(item + " "+ sayac);
                sayac++;
            }
            */
        }
        [WebMethod]
        public static string RandomKelime()
        {
            Random random = new Random();
            int sayimiz = random.Next(0,81000);
            WebClient client = new WebClient();
            string data = client.DownloadString("https://raw.githubusercontent.com/maidis/mythes-tr/master/veriler/kelime-listesi.txt");
            string[] split = data.Split('\n');
            string kelimemiz = split[sayimiz];
            string[] olds = { "Äž", "ÄŸ", "Ãœ", "Ã¼", "Åž", "ÅŸ", "Ä°", "Ä±", "Ã–", "Ã¶", "Ã‡", "Ã§" };
            string[] news = { "G", "g", "U", "u", "S", "s", "I", "i", "O", "o", "C", "c" };
            for (int i = 0; i < olds.Length; i++)
            {
                kelimemiz=kelimemiz.Replace(olds[i],news[i]);
            }
            /*
            if (kelimemiz.Contains('ı') && kelimemiz.Contains('ö') && kelimemiz.Contains('ü') && kelimemiz.Contains('ç') && kelimemiz.Contains('ğ') && kelimemiz.Contains('ş'))
            {
                kelimemiz.Replace((char)0xDC, 'i');
                kelimemiz.Replace('ö', 'o');
                kelimemiz.Replace('ü', 'u');
                kelimemiz.Replace('ç', 'c');
                kelimemiz.Replace('ğ', 'g');
                kelimemiz.Replace('ş', 's');
            }*/
            return kelimemiz;
           
        }

       

        protected void Label1_Load(object sender, EventArgs e)
        {
            Label1.Text = RandomKelime();
        }

        protected void Textbox_TextChanged(object sender, EventArgs e)
        {
           
        }

        protected void Timer1_Tick(object sender, EventArgs e)
        {
           

        }

        protected void Unnamed2_Click(object sender, EventArgs e)
        {

        }
    }
}