Instructions on how to build and run your solution, preferably in a README.

- Download bertram-coffee.zip and unzip it to a local file directory.
- Open bertram-coffee.html

Document any assumptions you made in creating your program.
   
1. We assume an employee cannot pay for an order if they did not get coffee. If
   this assumption is false, the code block labeled REFERENCE A could be moved
   outside of the if statement that checks if that employee has opted into
   getting coffee that day.

2. We assume no new employees go out for coffee with the group. If this
   assumption is false, employees could be permanently added or subtracted
   through add and remove buttons. While this is possible to add in plain
   JavaScript, it would be far more practical to use ngFor in Angular, a React
   mapping, or similar framework tool to account for a dynamic array of
   employees.

3. We assume an employee never permanently leaves and thus will not have to pay
   an outstanding balance. If this assumption is false, an edge case could be
   added where a recently removed employee is asked to pay their remaining
   balance to the next payee, with that same amount being subtracted from the
   tab of the payee.
   
4. We assume that tips are intended to be paid based on the pre-tax cost of the
   order, and that all employees are in agreement on what the tip amount should
   be. In other words, the tips is not aggregated from what each employee wants
   to tip independently for their coffee.
   
5. We assume the application is never closed, and that the volatile data
   persisting in the stack is never lost. If this assumption is false, we can
   use fs.writeFile() or similar to write all of the data in the stack to the
   filesystem and store it as non-volatile memory that can be accessed later.
   Alternatively, a backend and database could allow this data to be stored on a
   server.

If needed, document how to enter the data required for your program to run. For
example, the coffee consumers, the price for their coffee, etc.

The finished software solution must be provided to us to run locally or hosted
online

1. Confirm the name of each employee, the cost of their preferred cup of coffee,
   whether or not they received coffee at the group outing, and if they have an
   existing outstanding balance not accounted for as an initial condition.
2. Click "Calculate Payee" for each coffee outing to determine who should pay
   for that outing.

Additional notes:

This solution was created using vanilla JavaScript for the purposes of ease of
access by the interviewer, so that it could be accessed without running an
instance of Node. Much of the code, particularly in the HTML template, would be
different in a production setting, as a framework such as Angular or React would
be better suited to that use case:

The duplicate code for entering the name and cost of an employee's preferred
drink would be inside an Angular ngFor or React mapping to eliminate duplicate
code. It would also make it easier to implement a feature for permanently adding
and subtracting employees.