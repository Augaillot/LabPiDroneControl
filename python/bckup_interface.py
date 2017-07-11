from browser import document, alert

def show_values(event):
	dx1 = document['pos2ds1'].x
	dy1 = document['pos2ds1'].y
	dx2 = document['pos2ds2'].x
	dy2 = document['pos2ds2'].y
	x1 = document['poss1'].x
	x2 = document['poss2'].x
	x3 = document['poss3'].x
	str = "2Dx1 = " + dx1 + " | 2Dy1 = " + dy1 + " || 2Dx2 = " + dx2 + " | 2Dy2 = " + dy2 + " || x1 = " + x1 + " || x2 = " + x2 + " || x3 = " + x3
	alert(str)

document["button0"].bind("click", show_values)