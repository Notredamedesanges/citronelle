def on_b_pressed():
    pass
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    mySprite.vy = -150
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

mySprite: Sprite = None
scene.set_background_color(9)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
mySprite = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . f . . . 
            . . . . f . . . . . . . f f . . 
            . . . f f . 3 3 3 . . . . f . . 
            . . . f . . 3 . 3 5 . 5 f f . . 
            . . . f . . 5 5 3 3 5 5 5 . . . 
            . . . . f 5 5 5 5 5 5 5 5 . . . 
            . . . . . 5 5 f 5 5 f 5 5 . f f 
            . . . . 5 5 5 5 5 5 5 5 5 f f . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . 
            . . . . 5 5 f f f f f f 5 5 . . 
            . . . . f 5 5 5 5 5 5 5 5 . f . 
            . f f f f . 5 5 5 5 5 5 f f f . 
            . f f . . . . 5 5 5 . . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . . . f f . . . .
    """),
    SpriteKind.player)
animation.run_image_animation(mySprite,
    [img("""
            . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 3 . . . . . . . . . 
                . . . . . . 3 3 3 3 . . . . . . 
                . . . . . . 3 3 3 3 . . . . . . 
                . . . . . . 3 . 3 3 3 3 . . . . 
                . . . . . . 3 3 3 . . . . . . . 
                . . . . . . 3 3 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . .
        """),
        img("""
            . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 3 . . . . . . . . . 
                . . . . . . 3 3 3 3 . . . . . . 
                . . . . . . 3 3 3 3 . . . . . . 
                . . . . . . 3 . 3 3 3 3 . . . . 
                . . . 3 . . 3 3 3 . . . . . . . 
                . . . 3 . . 3 3 . 3 3 3 . . . . 
                . . 3 3 . . 3 3 . 3 3 3 3 . . . 
                . . 3 . . 3 3 3 3 3 3 3 3 . . . 
                . . 3 3 3 3 . . 3 3 3 3 3 . . . 
                . . 3 . . . . . . . . . 3 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . .
        """)],
    200,
    True)
controller.move_sprite(mySprite)
mySprite.ay = 300
scene.camera_follow_sprite(mySprite)