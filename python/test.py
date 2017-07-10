from smbus import SMBus

bus = SMBus(1)

address = 0x12

bus.write_byte_data(address, 20, 00)
print("Done")
