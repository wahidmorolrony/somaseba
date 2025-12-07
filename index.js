 function generateCertificates() {
      const name = document.getElementById("name").value.trim();
      const father = document.getElementById("father").value.trim();
      const mother = document.getElementById("mother").value.trim();
      const nid = document.getElementById("nid").value.trim();
      const union = document.getElementById("union").value.trim();
      const word = document.getElementById("word").value.trim();
      const bhata = document.getElementById("bhata").value.trim();
      const onumber = document.getElementById("onumber").value.trim();
      const pmobile = document.getElementById("pnumber").value.trim();
      

     
      // Certificate 1
      document.getElementById("showName1").innerText = name;
      document.getElementById("showFather").innerText = father;
      document.getElementById("showMother").innerText = mother;
      document.getElementById("showNid").innerText = nid;
      document.getElementById("showUnion").innerText = union;
      document.getElementById("showWord").innerText = word;
      document.getElementById("showBhata").innerText = bhata;
      document.getElementById("showOnumber").innerText = onumber;
      document.getElementById("showPnumber1").innerText = pmobile;
      document.getElementById("showPnumber2").innerText = pmobile;
      
      

      document.getElementById("cert1").style.display = "block";

      // Certificate 2
      
      

      document.getElementById("cert2").style.display = "block";
    }

    function printCertificate(id) {
      const printContents = document.getElementById(id).innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    }

    
  // নতুন QR কনটেইনারে তৈরি
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "Barakpur Union Porishad",
    width: 70,
    height: 70
  });

  const today = new Date();
  const date = today.toLocaleDateString('en-GB'); // dd/mm/yyyy
  document.getElementById("date").innerText = date;