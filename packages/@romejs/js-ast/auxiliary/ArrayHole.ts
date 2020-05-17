/**
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

import {JSNodeBase} from "../index";
import {createBuilder} from "../utils";

export type ArrayHole = JSNodeBase & {
	type: "ArrayHole";
};

export const arrayHole = createBuilder<ArrayHole>(
	"ArrayHole",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);
