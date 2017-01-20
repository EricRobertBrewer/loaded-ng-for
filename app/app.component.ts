import { Component, OnInit } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {

    allItems: Array<Item>;
    currentItems: Array<Item> = [];

    ngOnInit() {
        this.allItems = [];
        for (let i = 0; i < 8; i++) {
            let item = { id: i };
            this.allItems.push(item);
        }

        this.mixItems();
    }

    onMixTapped(event) {
        this.mixItems();
    }

    /** Make a random subset of `allItems` */
    mixItems() {
        this.currentItems = [];
        for (let i = 0; i < this.allItems.length; i++) {
            let random = AppComponent.nextInt(2) + 1;
            if (random === 1) {
                this.currentItems.push(this.allItems[i]);
            }
        }
    }

    public onItemLabelLoaded(event) {
        console.log("Loaded item: "+event.object.get("id"));
        setTimeout(() => {
            console.log("Loaded item after 10 ms:"+event.object.get("id"));
        }, 10);
        // call a function here using 'id'
    }

    static nextInt(range: number): number {
        return Math.floor(Math.random() * range);
    }
}

class Item {
    id: number;
}
