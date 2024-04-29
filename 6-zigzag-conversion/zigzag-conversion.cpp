class Solution {
public:
    string convert(string s, int numRows) 
    {
if (numRows == 1 || numRows >= s.length()) return s; // No change needed for numRows == 1 or greater than length of s
    
    std::vector<std::string> zigzag(numRows);
    int row = 0;
    bool goingDown = false;
    
    for (char c : s) {
        zigzag[row] += c;
        if (row == 0 || row == numRows - 1) goingDown = !goingDown; // Change direction if top or bottom row
        row += goingDown ? 1 : -1; // Move to next row
    }
    
    std::string word;
    for (const std::string& str : zigzag) {
        word += str;
    }
        return word;
    }
};