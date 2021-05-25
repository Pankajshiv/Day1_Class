var count=0;
function calcTotal() {
    var table=document.querySelector("table");
    var n;
    if(count===0)
        n=table.rows.length;
    else
        n=table.rows.length-1;
    var total=0;
    for(let i=1;i<n;i++){
        total+=parseInt(table.rows[i].cells.item(2).innerHTML);
    }

    if(count===0){
        count++; 
        var row=table.insertRow();
        var first=row.insertCell(0);
        var second=row.insertCell(1);
        var third=row.insertCell(2);
        second.setAttribute("data-ns-test", "grandTotal");
        second.setAttribute("id","grand");

        first.innerHTML="Grand Total";
        document.getElementById("grand").innerHTML=total;
    }
    else{
        count++;
        var len=table.rows.length;
        table.deleteRow(len-1);

        var row=table.insertRow();
        var first=row.insertCell(0);
        var second=row.insertCell(1);
        var third=row.insertCell(2);
        second.setAttribute("data-ns-test", "grandTotal");
        second.setAttribute("id","grand");

        first.innerHTML="Grand Total";
        document.getElementById("grand").innerHTML=total;
    }
    
}





<!-- Do not edit this you need to use JS to scrap prices and display their sum -->
    <h1>Grocery List</h1>
    <table>
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Title</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Item-1</td>
                <td data-ns-test="price">100</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Item-2</td>
                <td data-ns-test="price">200</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Item-3</td>
                <td data-ns-test="price">2</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Item-4</td>
                <td data-ns-test="price">1</td>
            </tr>
        </tbody>
    </table>
    <button onClick='calcTotal()'>Total</button>















