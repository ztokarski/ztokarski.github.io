$(document).ready( function () {
    $('#example').DataTable({
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );
 
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        },

        "pagingType": "full_numbers",
        "language": {
            "lengthMenu": "Wyswietl _MENU_ rekordow na strone",
            "zeroRecords": "Nie ma pasujacych rekordow",
            "info": "Pokazuje _START_ do _END_ z _TOTAL_ rekordow",
            "infoEmpty": "Nie znaleziono pasujacych rekordow",
            "infoFiltered": "(przeszukano _MAX_ rekordow)",
            "search": "wyszukaj",
            "paginate": {
                "first": "<<",
                "last": ">>",
                "next": ">",
                "previous": "<"
            }
        }
    });
} );

function demon(){
    if (document.getElementById("demo").value!=="test") {
        document.getElementById("demo").innerHTML = "Click Me Once Again!";
    }
    document.getElementById("demo").innerHTML = somefunc(7,6,function(){
        return 'anonymus';}
);
}

$('#demo').click(function(){
    console.log('#demo was clickeddd');
});

function somefunc(x, y, callback){
    if (x + y > 10){
        return callback();
    }
    else{
        return 'to low';
    }
    
}



function cbfunction(){

    return 'funkcja callback'
}

function demoloop(){
    let testArray = []
    for (let index = 1; index < 9; index++) {
        testArray.push(index);
    }
    alert('hej');
    return testArray;
}

demoloop2 = () =>{
    let testArray = []
    for (let index = 1; index < 4; index++) {
        testArray.push(index);
    }
    return testArray;
}


