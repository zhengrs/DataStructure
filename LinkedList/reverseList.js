
var reverseList = function(head){
	if( !head || !head.next )	return head;

	var node = head,
		pre = null,
		next;

	while(node){
		next = node.next;
		node.next = pre;

		pre = node;
		node = next;
	}

	return pre;
};
