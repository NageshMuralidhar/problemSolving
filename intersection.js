function intersection(nums1, nums2) {
  let ht = {};
  for (let i = 0; i < nums1.length; i++) {
    if (ht[nums1[i]] == null) {
      ht[nums1[i]] = 0;
    } else {
      ht[nums1[i]] += 1;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (ht[nums2[i]] == null) {
      ht[nums2[i]] = 0;
    } else {
      ht[nums2[i]] += 1;
    }
  }
  for (val in ht) {
    if (ht.hasOwnProperty(val)) {
      if (ht[val] > 0) {
        console.log(val);
      }
    }
  }
  console.log(ht);
}

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
intersection(nums1, nums2);
