
// head is a sorted list
var insertIntoSortedList = function( head , newNode ){

	newNode.next = null;

	if( !head ){
		return newNode;
	}

	if( newNode.val < head.val ){
		newNode.next = head;
		return newNode;
	}

	var node = head;
	while( node.next && (node.next.val < newNode.val) ){
		node = node.next;
	}

	newNode.next = node.next;
	node.next = newNode;

	return head;
};
	
var insertionSortList = function( head ){
	if( !head || !head.next )	return head;

	var node = head, next,
		head1 = null;
	while( node ){
		next = node.next;
		head1 = insertIntoSortedList( head1, node );
		node = next;
	}

	return head1;
};
