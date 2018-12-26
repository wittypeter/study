class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        
        mapping = {}
        for index in range(len(nums)):
            mapping[nums[index]] = index
            
        for index in range(len(nums)):
            if mapping.get(target - nums[index]):
                ans = [index, mapping[target - nums[index]]]

                if ans[0] == ans[1]:
                    continue
                
                if ans[0] > ans[1]:
                    ans[0], ans[1] = ans[1], ans[0]
                    
                return ans


if __name__ == '__main__':
    t = Solution()
    print t.twoSum([1,3,4,2], 6)