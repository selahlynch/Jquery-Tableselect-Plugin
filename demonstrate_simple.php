<!DOCTYPE HTML>
<html dir="ltr" lang="en-US">

<head>
	<title>Table Select</title>
	<style type="text/css">
		.tableselect tr.selected {
  			background-color: #4598FF;
  		} 		
  		.tableselect{
  			font-family:Arial, Helvetica, sans-serif;
  		}
	</style>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	<script type="text/javascript" src="jquery.tableselect.js"></script>
	<script type="text/javascript" >




///////////////////// SEE THE CODE HERE! /////////////////////////////////
	
		$(document).ready(function(){
			try{
				$('#tbl3').tableselect({name:'people', hidefirstrow:true});
			}catch(err){
				alert(err);
			}
		});	

////////////////////////////////////////////////////////////////////////////
		
		
		
	</script>
</head>

<body >

Posted variables:<br /> 
<?php var_dump($_POST);?>
<br /><br />

<form method='post'>

This table is selectable.
<table id='tbl3' style=''>
<thead>
<tr><th>ID</th> <th>Name</th><th>Age</th></tr>
</thead>
<tbody>
<tr><td>1</td> <td>Dan</td> <td>46</td></tr>
<tr><td>2</td> <td>Sue</td> <td>54</td></tr>
<tr><td>3</td> <td>Sadie</td> <td>21</td></tr>
<tr><td>4</td> <td>Bob</td> <td>21</td></tr>
<tr><td>5</td> <td>Jerry</td> <td>22</td></tr>
<tr><td>6</td> <td>Stan</td> <td>31</td></tr>
<tr><td>7</td> <td>Doug</td> <td>45</td></tr>
<tr><td>8</td> <td>Matty</td> <td>23</td></tr>
<tr><td>9</td> <td>Chaz</td> <td>1.3</td></tr>
</tbody>
</table> 
<br />
<hr />
	
<input type='submit' value='send_data'></input>
	
</form>
	
</body>

</html>
