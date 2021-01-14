function isLockNessMonster(s) {
    return s.search("tree") && s.search("fiddy") >= 0 || s.search("three fifty") >= 0 || s.search("3.50") >= 0;
 }



console.log(isLockNessMonster("I will absolutely, positively, never give that darn Lock Ness Monster any of my three dollars and fifty cents"));


// console.log("Your girlscout cookies are ready to ship. Your total comes to tree fiddy");
// Test.expect(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
// console.log("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.");
// Test.expect(!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));