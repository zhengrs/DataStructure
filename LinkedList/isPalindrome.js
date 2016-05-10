
// return new head
var reverse = function( head ){
	if( !head || !head.next )	return head;

	var node = head,
		next,
		pre = null;

	while( node ){
		next = node.next;
		node.next = pre;

		pre = node;
		node = next;
	}

	return pre;
};

var isIdenticalExceptLast = function(head1, head2){

	if( !head1 || !head2 )	return false;

	var node1 = head1,
		node2 = head2;

	while( node1 && node2 ){
		if(node1.val != node2.val){
			return false;
		}
		node1 = node1.next;
		node2 = node2.next;
	}

	if( !node1 && !node2 )	return true;

	if( node1 && !node1.next){
		return true;
	}
	if( node2 && !node2.next ){
		return true;
	}
	return false;
};

var isPalindrome = function( head ){
	if( !head || !head.next )	return true;

	var len = 0, 
		node = head,
		i,
		n,
		head1,
		res;

	while(node){
		len ++;
		node = node.next;
	}

	node = head;
	i = 0;
	n = Math.floor(len/2);
	while( i<n-1 ){
		node = node.next;
		i++;
	}

	head1 = node.next;
	node.next = null;

	head1 = reverse(head1);

	res = isIdenticalExceptLast( head1, head );

	head1 = reverse(head1);
	node.next = head1;

	return res;
};



function ListNode(val) {
	this.val = val;
	this.next = null;
}

var head = new ListNode(1);
head.next = new ListNode(2);

console.log(isPalindrome(head));
