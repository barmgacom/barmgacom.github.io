with open("bootstrap.min.css","r") as f:
    r= f.read().replace('#2124B1','#2780B7')
with open("bootstrap.min.css","w") as f:
    f.write(r)
