


//Remove all elements from a linked list of integers that have value val.


var removeElements = function(head, val) {
	
	if( !head )	return head;

	while( head && head.val === val ){
		head = head.next;
	}

	if( !head )	return head;

	var node = head.next,
		preNode = head;

	while( node ){
		if( node.val === val ){
			preNode.next = node.next;
			node = node.next;
		}
		else{
			preNode = node;
			node = node.next;
		}
	}

	return head;

};
