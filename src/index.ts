export function GetbillsFromAtm(MoneyDemand: number): [] {
  const AvaibaleBills = [500, 200, 100, 20, 10];
  let ReturnBills = [0, 0, 0, 0, 0];

  for (let i = 0; i < AvaibaleBills.length; i++) {
    while (MoneyDemand - AvaibaleBills[i] >= 0) {
      ReturnBills[i] += 1;
      MoneyDemand -= AvaibaleBills[i];
    }
  }

  return ReturnBills;
}
