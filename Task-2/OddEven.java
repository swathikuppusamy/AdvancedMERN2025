import java.util.*;

class Main{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        if((n&1)==0)
        System.out.println("The Given number is Even");
        else
        System.out.println("The Given number is Odd");
    }
}