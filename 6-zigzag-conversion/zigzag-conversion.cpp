class Solution {
public:
    string convert(string s, int numRows) 
    {
        if (numRows == 1) 
            return s;

        vector<string> zigzag(numRows);
        int row = 0;
        bool goingDown = false;
    
        for (char c : s) {
            zigzag[row] += c;
            if (row == 0 || row == numRows - 1) 
                goingDown = !goingDown;
            row += goingDown ? 1 : -1;
        }
    
        string word;
        for (const string& str : zigzag) 
            word += str;
        return word;
    }
};