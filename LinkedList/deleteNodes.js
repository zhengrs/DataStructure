//Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

var deleteNode = function(node){
	if(!node || !node.next){
		return;
	}

	while( node.next.next ){
		node.val = node.next.val;
		node = node.next;
	}

	node.val = node.next.val;
	node.next = null;
};
