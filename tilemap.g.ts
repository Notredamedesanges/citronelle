// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`4b000f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000005050500000000000000000303030300000000000000000000000000000000000000000000000000000000000005050505050505000000000000000000000005000000000303030000000000000000000000000000000303030300000000000000000000000000000000000000000000000000000000000000000000000005050000000000050003000505000000050505050000000000000000000000000005050303030300000000000000000000000000000000000000000000000000000300000000000000000000000000000000000505050500000000050000000505000000000505050000000000000505050500000000000000000000000000000000000000000000000000050500000000000000000000000000000000000000000000000005000000000000000000050500000500000000000000000000000000000101010101010000000000000000000505050505050000000000000000000005000000000000000000000000000000000000000000000000000000000005050505000000000000000000000000000000000000000000000000000000000000000000000505050003000000050005050500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000050505000000000505000000000000000000000000000000000000000000000000000505050500000000000000000000000000000001010101010101010000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000005050500000000000000050505000000000000000000000000000000000000000505050505050000000000000000030000000000000000000000000000000000000303000000000000000000000000000000000000000005050000000000000000000000000000000000000000000000000000000505050505050000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000001010101000000000001010101000000000000000000000000000000000000000005050505050505000000000000000000000000000000000000000000000000000000000000000000020202020202020202020202020202040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
...........................................................................
...........................................................................
........................................................222................
..........................2222222...........2..............................
................................22.....2...22...2222.............22........
........................................2222....2...22....222......2222....
.....................22........................2.........22..2.............
.222222.........222222..........2.............................2222.........
.........................222.....2.222.....................................
...........................222....22.........................2222..........
.....22222222..............................................222.......222...
................222222.................................................22..
.........................222222............................................
..2222.....2222....................2222222.................................
...........................................................................
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.dungeon.hazardLava0,myTiles.tile1,sprites.dungeon.hazardLava1,sprites.castle.tileGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
