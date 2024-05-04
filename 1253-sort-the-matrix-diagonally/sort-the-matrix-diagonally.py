class Solution:
    def diagonalSort(self, mat: List[List[int]]) -> List[List[int]]:
        def sortedDiagonal(i, j):
            diagonal = []
            while i < len(mat) and j < len(mat[0]):
                diagonal.append(mat[i][j])
                i += 1
                j += 1
            diagonal.sort()
            return diagonal
        
        for j in range(len(mat[0])-1):
            diagonal = sortedDiagonal(0, j)
            i, j = 0, j
            for val in diagonal:
                mat[i][j] = val
                i += 1
                j += 1
        
        for i in range(1, len(mat)-1):
            diagonal = sortedDiagonal(i, 0)
            i, j = i, 0
            for val in diagonal:
                mat[i][j] = val
                i += 1
                j += 1
        
        return mat