using System;

namespace DoublyLinkedList
{
    public class Node
    {
        public Object data;
        public Node next;
        public Node prev;
        public Node(object d)
        {
            data = d;
            next = null;
            prev = null;

        }
    };
    public class DoubleLinkedList
    {
        public Node head;
       // public Node current;
        public int count;
        public DoubleLinkedList(){
            head = new Node(null);
            //current = head;
           // count = 0;
        }
        public void Insert(object d){
            Node newNode = new Node(d);
            newNode.next = head;
            if(head!=null){
                head.prev = newNode;
            }
            head = newNode;
            newNode.prev = null;

        }
		
		public void PrintAllNodes()
		{
			//Traverse from head
			Console.Write("Head ->");
			Node curr = head;
			while (curr.next != null)
			{
				Console.Write(curr.data);
				curr = curr.next;
				Console.Write("->");
			}
			Console.Write("NULL");
		}
    };
	class Program
	{
		static void Main(string[] args)
		{
            DoubleLinkedList lnklist = new DoubleLinkedList();
			lnklist.PrintAllNodes();
			Console.WriteLine();
			lnklist.Insert(12);
            lnklist.Insert("John");
            lnklist.Insert("Peter");
			lnklist.Insert(34);
            lnklist.Insert("divya");
            lnklist.Insert(("anamika"));
            lnklist.Insert("check");
			lnklist.PrintAllNodes();
			Console.WriteLine();
			Console.ReadKey();
		}
	}
}
