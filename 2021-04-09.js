function solution(bridge_length, weight, truck_weights) {
  const on_bridge = [];
  const truck_total = truck_weights.length;
  let burden = 0;
  let passed_truck = 0;
  let passed_time = 0;
  let truck_waiting = true;

  while (truck_waiting) {
    let next_order = (burden + truck_weights[0] <= weight) ? truck_weights.shift() : 0;
    console.log(next_order);
    if (bridge_length <= on_bridge.length) {
      const unload_truck = on_bridge.shift();
      if (unload_truck) {
        passed_truck++;
        burden -= unload_truck;
      }
    }

    on_bridge.push(next_order);
    burden += next_order;
    passed_time++;

    console.log(on_bridge);
    if (truck_total <= passed_truck) truck_waiting = false;
  }

  return passed_time;
}