// https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript

function solution(bridge_length, weight, truck_weights) {
  const truck_total = truck_weights.length;
  const on_bridge = [];
  
  let burden = 0;
  let passed_truck = 0;
  let passed_time = 0;
  let truck_waiting = true;

  while (truck_waiting) {
    let next_order = 0;

    if (bridge_length <= on_bridge.length) {
      const unload_truck = on_bridge.shift();

      if (unload_truck) {
        passed_truck++;
        burden -= unload_truck;
      }
    }
    next_order = (burden + truck_weights[0] <= weight) ? truck_weights.shift() : 0;

    on_bridge.push(next_order);
    burden += next_order;
    passed_time++;

    if (truck_total <= passed_truck) truck_waiting = false;
  }

  return passed_time;
}