function funCall(){
    var myArray=[
     
     {SRN: 'R001',StudentName: 'JOHNSON STYLES',ContactNo: '1234567890',Email: 'johnson@gmail.com',Branch: 'CSE'},
     {SRN: 'R002',StudentName: 'CAMERON GREASLY',ContactNo: '2345678901',Email: 'cameron@gmail.com',Branch: 'CSE'},
     {SRN: 'R003',StudentName: 'CONNER STANLEY',ContactNo: '3456789012',Email: 'conner@gmail.com',Branch: 'CSE'},
     {SRN: 'R004',StudentName: 'MARY SWETART',ContactNo: '4567890123',Email: 'mary@gmail.com',Branch: 'CSE'},
     {SRN: 'R005',StudentName: 'LEXI BROWN',ContactNo: '5678901234',Email: 'lexi@gmail.com',Branch: 'CSE'},
     {SRN: 'R006',StudentName: 'THOMAS POWELL',ContactNo: '6789012345',Email: 'thomas@gmail.com',Branch: 'CSE'},
     {SRN: 'R007',StudentName: 'NICOLE CONNER',ContactNo: '7890123456',Email: 'nicole@gmail.com',Branch: 'CSE'},
     {SRN: 'R008',StudentName: 'MAGGIE SMITH',ContactNo: '890123456',Email: 'maggie@gmail.com',Branch: 'CSE'},
     {SRN: 'R009',StudentName: 'DANIEL CROOKS',ContactNo: '9012345678',Email: 'daniel@gmail.com',Branch: 'CSE'},
     {SRN: 'R010',StudentName: 'WILLIAM BROOKE',ContactNo: '890123456',Email: 'william@gmail.com',Branch: 'CSE'},
     {SRN: 'R011',StudentName: 'SUZZIE BAY',ContactNo: '5632738281',Email: 'suzzie@gmail.com',Branch: 'CSE'},
     {SRN: 'R012',StudentName: 'MADISON WILLIAMS',ContactNo: '64683728348',Email: 'madison@gmail.com',Branch: 'CSE'},
     {SRN: 'R013',StudentName: 'OAKLEY FISHER',ContactNo: '846724659',Email: 'oakley@gmail.com',Branch: 'CSE'},
     {SRN: 'R014',StudentName: 'HALSTON BLAKE',ContactNo: '63729462718',Email: 'halston@gmail.com',Branch: 'CSE'},
     {SRN: 'R015',StudentName: 'OLIVER WOOD',ContactNo: '55638247590',Email: 'oliver@gmail.com',Branch: 'CSE'},
    ]
     
     var html ="<table  border='1|1'>"
     
    
     setTimeout (() => {
     
    
     html+'<thead>'
     html+= '<tr>';
    
     html+= '<td>'+'SRN' +'</td>'; 
     html+= '<td>'+'StudentName'+'</td>';
     html+='<td>'+'ContactNO'+'</td>';
     html+='<td>'+'Email'+'</td>';
     html+='<td>'+'Branch'+'</td>';
     html+='</tr>';
     html+'</thead>'
     
     for(var i=0; i<myArray.length; i++){
     
     
     html+='<tr>';
     
    
     html+='<td>'+myArray[i].SRN+ '</td>';
     html+='<td>'+myArray[i].StudentName+'</td>';
     html+='<td>'+myArray[i].ContactNo+'</td>';
     html+='<td>'+myArray[i].Email+'</td>';
     html+='<td>'+myArray[i].Branch+'</td>';
     html+='</tr>';
     
     }
     
     
     
     
     document.getElementById("table").innerHTML = html 
   },500);
     
     }
     
   funCall()