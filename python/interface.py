from browser import document,alert
from smbus import SMBus

bus = SMBus(1)
address = 0x12

def send_values(event):
	dx1 = document['pos2ds1'].x
	dy1 = document['pos2ds1'].y
	dx2 = document['pos2ds2'].x
	dy2 = document['pos2ds2'].y
	x1 = document['poss1'].x
	x2 = document['poss2'].x
	x3 = document['poss3'].x
	str = "X1 = " + x1
	alert(str)
#	bus.write_byte_data(address, x1*100, 00)

document["button0"].bind("click", send_values)
