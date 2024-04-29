class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) 
    {
        int shortest = 0;
        for(int i = 0; i<strs.size(); i++)
            if (strs[i].length() < strs[shortest].length())
                shortest = i;


        string output = "";
        bool cont = true;
        int j = 0;
        while(j < strs[shortest].length())
        {
            for(int i = 0; i<strs.size(); i++)
            {
                if(strs[i][j] != strs[0][j])
                {
                    cont = false;
                    break;
                }
            }
            if (!cont) break;
            output += strs[0][j];
            j++;
        }
        return output;
    }
};