public class Solution {
    public long PickGifts(int[] gifts, int k) {
        for(int i=0; i<k; i++)
        {
            int maxindex = 0;
            for (int j=0; j<gifts.Length; j++)
            {
                if(gifts[j]>gifts[maxindex])
                    maxindex = j;
            }
            gifts[maxindex] = (int)Math.Floor(Math.Sqrt(gifts[maxindex]));
        }
        long sum=0;
        for(int i=0; i<gifts.Length;i++)
            sum += gifts[i];
        return sum;
    }
}