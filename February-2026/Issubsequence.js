var isSubsequence=function(s,t){
        let i = 0, j = 0;

    while (i < s.size() && j < t.size()) {
        if (s[i] == t[j]) {
            i++;
        }
        j++;
    }

    return i == s.size();
}