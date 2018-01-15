using System;

namespace quickSort
{

    class QuickSort
    {
        public static int[] Sorting(int[] arr,int p,int r)
        {
            if (p < r)
            {

                int q = Partition(arr, p, r);
                Sorting(arr, p, q - 1);
                Sorting(arr, q + 1, r);
            }
            return arr;

        }
        public static int Partition(int[] arr,int p,int r){

            int x = arr[r];
            int i = p - 1;
            for (int j = p; j < r; j++)
            {
                if(arr[j]<=x){
                    i=i + 1;
                    Swap(ref arr[i], ref arr[j]);

                }
            }
            Swap(ref arr[r], ref arr[i + 1]);
            return i+1;
        }
        public static void Swap(ref int a,ref int b){
			int tempswap = a;
			a = b;
			b = tempswap;
		}
        public static void print(int [] arr){
            for (int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine(arr[i]);
            }
        }
    };
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = { 10, 80,30, 90, 40, 50,70 };
            int [] sortArr=QuickSort.Sorting(arr,0,6);
            QuickSort.print(sortArr);
            Console.ReadKey();

        }
    }
}
