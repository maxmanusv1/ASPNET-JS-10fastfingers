

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="_10fastfingers.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link href="Bootstrap/css/bootstrap.css" rel="stylesheet" />
     <script src="script.js"></script>
    <style>
#txtbox2{
    height: 100px;
    resize: none;
    font-size:16px;
}
#txtboxdiv{
    padding-top: 20px;
}
#saat{
    float: right;
}
    </style>
 
</head>
   
<body>
    <form id="form1" runat="server">
    <div class="container">
        <div class="row">
          <div class="col">
            <h1>
                
                10fastfingers <span class="badge badge-secondary" style="background-color: black;">By Maxmanus</span></h1>
              
            <div class="alert alert-primary" role="alert">
             DİGER KELİMEYE GEÇMEK İÇİN SPACE VEYA ENTER'A BAS
            </div>
          </div>
          <div class="w-100"></div>

          <div class="col"><asp:Label ID="Label1" runat="server" Text="Label" OnLoad="Label1_Load" Font-Size="XX-Large"></asp:Label>
                  <h1 class="display-4" id="saat">60</h1>
              </div>
          <div class="w-100"></div>

          <div class="col" id="txtboxdiv">
            <div class="input-group">
               
                <textarea id="txtbox2" class="form-control" cols="20" rows="1" ></textarea>
            </div>
          </div>
          <div class="w-100"></div>
          <div class="col">
              <asp:Button runat="server" CssClass="btn btn-success" Text="Gönder" />
              <asp:Button runat="server" CssClass="btn btn-secondary" Text="Sıfırla" />
                  
          </div> 
        </div>
        <div class="w-100"></div>
         <div class="row">
                        <div class="col">
                            <h4 style="text-align:center" id="Basarili_Sayac">0</h4>
                        </div>
                        <div class="col">
                            <h4 style="text-align:center"  id="Bos_Sayac">0</h4>
                        </div>
                        <div class="col">
                            <h4 style="text-align:center" id="Basarisiz_Sayac">0</h4>
                        </div>
    
                      </div>
        <div class="w-100"></div>
        <div class="col" id="enassagisi">
            <div class="container">
                    <div class="row">
                        <div class="col">
                             <div class="alert alert-success" role="alert">
                                    Doğru girilen kelimeler:
                                 <ol class="list-group" id="basarili">
                                  
                                </ol>
                            </div>
                        </div>
                        <div class="col">
                            <div class="alert alert-light" role="alert">
                              Boş geçilen kelimeler:
                              <ol class="list-group" id="bos">
                                 </ol>
                            </div>

                        </div>
                        <div class="col">
                            <div class="alert alert-danger" role="alert">
                             Yanlış girilen kelimeler: 
                                 <ol class="list-group" id="basarisiz">
                                 </ol>
                            </div>
                        </div>
    
                      </div>
             </div> 

         </div>
     </div>
        
       <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true">
       </asp:ScriptManager>
       
   
    </form>
</body>
</html>
