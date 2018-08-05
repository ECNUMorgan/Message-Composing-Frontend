import { NgModule } from '@angular/core';
import { MomentPipe } from './moment/moment.pipe';
export const pipes = [
  MomentPipe
];
@NgModule({
	// declarations: [MomentPipe],
	// imports: [],
	// exports: [MomentPipe]
	declarations: [pipes],
	exports:[pipes]
})
export class PipesModule {}



