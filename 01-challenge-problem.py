class Coordinate:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    def __init__(self, origin, width, height):
        self.origin = origin
        self.width = width
        self.height = height

    def getArea(self):
        return self.width * self.height

    def printCoordinates(self):
        top_right_coordinate = self.origin.x + self.width
        bottom_left_coordinate = self.origin.y + self.height
        print('Starting Coordinate (X)): ' + str(self.origin.x))
        print('Starting Coordinate (Y)): ' + str(self.origin.y))
        print('End Coordinate X-Axis (Top Right): ' + str(top_right_coordinate))
        print('End Coordinate Y-Axis (Bottom Left): ' + str(bottom_left_coordinate))


def create_rectangle():
    rectangle_origin = Coordinate(50, 100)
    rectangle = Rectangle(rectangle_origin, 90, 10)

    return rectangle


rectangle = create_rectangle()

print(rectangle.getArea())
rectangle.printCoordinates()
