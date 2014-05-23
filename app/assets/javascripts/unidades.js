

function show_lecturas(unidad, tag)
{
	next = $(tag).next();

	lecturas = $('<tr class="lecturas"><td colspan="4"></td></tr>');

	if( next.hasClass('lecturas') )
	{
		next.remove();
	}
	else
	{
		next.before(lecturas);
	}
	
	lecturas.children("td").load('/unidades/lecturas/'+unidad);	
}