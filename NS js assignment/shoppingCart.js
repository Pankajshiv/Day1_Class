var itemNumber=1;
var total=0;
var table=document.querySelector("table");

var totalRow=table.insertRow();
var grandcell1=totalRow.insertCell(0);
var grandcell2=totalRow.insertCell(1);
var grandcell3=totalRow.insertCell(2);

grandcell2.innerHTML="";
grandcell3.setAttribute("data-ns-test","grandTotal");
grandcell3.innerHTML=total;

function insertItem() {
    
    var a=document.getElementById("item-name-input").value;
    var b=document.getElementById("item-price-input").value;
    if(a==null || b==null ||a=="" || b==""){
        return;
    }
    else{
        
        var row=table.insertRow();
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);

     //   cell2.setAttribute("id","item-name-input");
        cell2.setAttribute("data-ns-test","item-name");

     //   cell3.setAttribute("id","item-price-input");
        cell3.setAttribute("data-ns-test","item-price");

        cell1.innerHTML=itemNumber;
        itemNumber++;
        cell2.innerHTML=a;
        cell3.innerHTML=b;

        document.getElementById("item-name-input").value ="";
        document.getElementById("item-price-input").value ="";

        var len=table.rows.length;
        var total=0;
        for(let i=2;i<len;i++){
            total+=parseFloat(table.rows[i].cells.item(2).innerHTML);
        }

        table.rows[1].cells.item(2).innerHTML=total;
    }
    
   
}







<h1>Grocery List</h1>
<input  type=="text" placeholder="Item name" id="item-name-input"  />
<input  type="number" placeholder="price" id="item-price-input"  />
<button id="btn" onclick="insertItem()">Add</button>
<table>
        <tr>
             <th>Sr. No.</th>
            <th>Title</th>
            <th>Price</th>
        </tr>
</table>














