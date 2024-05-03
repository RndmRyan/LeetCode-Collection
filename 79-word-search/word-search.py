class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        visited = set()

        def dfs(row, col, i):
            if i == len(word):
                return True
            elif row < 0 or col < 0 or row >= len(board) or col >= len(board[0]) or board[row][col] != word[i] or (row, col) in visited:
                return False
            visited.add((row, col))
            ans = (dfs(row, col-1, i+1) or dfs(row, col+1, i+1) or dfs(row+1, col, i+1) or dfs(row-1, col, i+1))
            visited.remove((row, col))
            return ans
       
        for rows in range(len(board)):
            for cells in range(len(board[0])):
                    if dfs(rows, cells, 0):
                        return True
        
        return False