(function(){

	var LinkedNode = function(val){
		this.data = val;
		this.next = null;
	};

	var reverseNodesInKgroup = function( head, k ){
		if( !head || k<=1 )	return head;

		var a = new Array(k),
				p = head, 
				i,
				pNode;

		for( i=0; i<k; i++ ){
			if( !p )	return head;
			a[i] = p;
			p = p.next;
		}

		for( i=0; i<k; i++ ){
			if( i == 0 ){
				a[0].next = a[k-1].next;
			}
			else{
				a[i].next = a[i-1];
			}
		}
		head = a[k-1];


		pNode = a[0];
		while( true ){
			p = pNode.next;
			for( i=0; i<k; i++ ){
				if( !p )	return head;
				a[i] = p;
				p = p.next;
			}

			for( i=0; i<k; i++ ){
				if( i == 0 ){
					a[0].next = a[k-1].next;
				}
				else{
					a[i].next = a[i-1];
				}
			}
			pNode.next = a[k-1];
			pNode = a[0];
		}

	};
	

	(function(){

		var l = new LinkedList();
		l.append(1);
		l.append(2);
		l.append(3);
		l.append(4);
		l.append(5);
		l.append(6);
		l.append(7);
		l.append(8);
		l.append(9);

		var h = reverseNodesInKgroup(l.head, 4);
		print(h);

	})();

})();
