// MVC

// M - model
// V - view
// C - controler

import { UserView } from "./user/view.mjs";

const user = new UserView("Igor", 23, "Kyiv");
user.render(0);

const user2 = new UserView("Igor2", 233, "Kyiv");
user2.render(1);

