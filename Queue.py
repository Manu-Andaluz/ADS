class Node:

	def __init__(self, value):
		self.value = value
		self.next = None

class Queue:

	def __init__(self):
		self.head = self.tail = None
        self.length = 0

	def EnQueue(self, item):
		node = Node(item)
        self.length += 1

		if self.tail == None:
			self.head = self.tail = node
			return
		self.tail.next = node
		self.tail = node

	def DeQueue(self):
        
		if self.isEmpty():
			return

        self.length -= 1
		head = self.head
		self.head = self.head.next

		if(self.head == None):
			self.tail = None


