
var isIsomorphic = function (s, t) {
    const m1 = {}, m2 = {}
    if (s.length !== t.length) return false
    for (let i = 0; i < s.length; i++) {

        if (m1[s[i]] &&  m1[s[i]] !== t[i])
            return false
        m1[s[i]] = t[i]
        if (m2[t[i]] && m2[t[i]] !== s[i])
            return false
        m2[t[i]] = s[i]
    }
    return true
}